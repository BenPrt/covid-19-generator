import pdfBase from 'ressources/certificate.pdf';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import QRCode from 'qrcode';
import moment from 'moment';

class CertificateGenerator {
  // Function encapsulating PDF creation, formatting and download
  downloadPdf = async (values) => {
    const { outingDate, outingTime } = values;
    const pdfBlob = await this.generatePdf(values);
    this.downloadBlob(
      pdfBlob,
      `attestation-${outingDate}_${outingTime.split(':')[0]}-${
        outingTime.split(':')[1]
      }.pdf`,
    );
  };

  // Function creating a downloadable tag making the PDF file downloadable
  downloadBlob = (blob, fileName) => {
    const link = document.createElement('a');
    var url = URL.createObjectURL(blob);
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
  };

  // Function generating a new PDF file based on the 'ressources/certificate.pdf' file and writing
  // according informations
  generatePdf = async (values) => {
    let {
      name,
      surname,
      birthday,
      birthPlace,
      address,
      city,
      postalCode,
      outingDate,
      outingTime,
      generationDate,
      generationTime,
      reason,
    } = values;

    birthday = this.formatDate(birthday);
    outingDate = this.formatDate(outingDate);
    generationDate = this.formatDate(generationDate);

    const data = [
      `Cree le: ${generationDate} a ${generationTime}`,
      `Nom: ${name}`,
      `Prenom: ${surname}`,
      `Naissance: ${birthday} a ${birthPlace}`,
      `Adresse: ${address} ${postalCode} ${city}`,
      `Sortie: ${outingDate} a ${outingTime.split(':')[0]}h${
        outingTime.split(':')[1]
      }`,
      `Motifs: ${reason}`,
    ].join('; ');

    const existingPdfBytes = await fetch(pdfBase).then((res) =>
      res.arrayBuffer(),
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const page1 = pdfDoc.getPages()[0];

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const drawText = (text, x, y, size = 11) => {
      page1.drawText(text, { x, y, size, font });
    };

    drawText(`${surname} ${name}`, 123, 686);
    drawText(birthday, 123, 661);
    drawText(birthPlace, 92, 638);
    drawText(`${address} ${postalCode} ${city}`, 134, 613);

    switch (reason) {
      case 'travail':
        drawText('x', 76, 527, 19);
        break;
      case 'courses':
        drawText('x', 76, 478, 19);
        break;
      case 'sante':
        drawText('x', 76, 436, 19);
        break;
      case 'famille':
        drawText('x', 76, 400, 19);
        break;
      case 'sport':
        drawText('x', 76, 345, 19);
        break;
      case 'judiciaire':
        drawText('x', 76, 298, 19);
        break;
      case 'missions':
        drawText('x', 76, 260, 19);
        break;
      default:
        break;
    }

    drawText(city, 111, 226);

    drawText(outingDate, 92, 200);
    drawText(outingTime.split(':')[0], 200, 201);
    drawText(outingTime.split(':')[1], 220, 201);

    drawText('Date de création:', 464, 150, 7);
    drawText(`${generationDate} à ${generationTime}`, 455, 144, 7);

    const generatedQR = await this.generateQR(data);

    const qrImage = await pdfDoc.embedPng(generatedQR);

    page1.drawImage(qrImage, {
      x: page1.getWidth() - 170,
      y: 155,
      width: 100,
      height: 100,
    });

    pdfDoc.addPage();
    const page2 = pdfDoc.getPages()[1];
    page2.drawImage(qrImage, {
      x: 50,
      y: page2.getHeight() - 350,
      width: 300,
      height: 300,
    });

    const pdfBytes = await pdfDoc.save();

    return new Blob([pdfBytes], { type: 'application/pdf' });
  };

  // Function generation the QrCode from the passed-in parameter data
  // eslint-disable-next-line consistent-return
  generateQR = async (data) => {
    try {
      var opts = {
        errorCorrectionLevel: 'M',
        type: 'image/png',
        quality: 0.92,
        margin: 1,
      };
      return await QRCode.toDataURL(data, opts);
    } catch (err) {
      console.error(err);
    }
  };

  // Function formatting date from "YYYY-MM-DD" format to "DD/MM/YYYY"
  formatDate= (date) => {
    return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
  }
}

export default CertificateGenerator;
