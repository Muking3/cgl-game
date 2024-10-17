import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default async function generatePDF(
    name: string,
    title: string,
    headers: string[],
    data: (string | number | null | undefined)[][],
    logo: string,
    orientation: 'portrait' | 'landscape' = 'portrait'
) {
    const pdf = new jsPDF({
        orientation,
        unit: 'mm',
        format: 'a4'
    });
    const imgData: string = await getImageDataUrl(logo)
    pdf.addImage(imgData, 'JPEG', 14.5, 10, 40, 20);

    pdf.setFontSize(16);
    pdf.setTextColor(40);
    pdf.setFont('helvetica', 'bold');

    pdf.text(title, pdf.internal.pageSize.getWidth() / 2, 50, { align: 'center' });

    pdf.autoTable({
        head: [headers],
        body: data,
        startY: 60,
        styles: {
            fontSize: 10,
            cellPadding: 3,
        },
        headStyles: {
            fillColor: [40, 40, 40],
            textColor: [255, 255, 255],
        },
        alternateRowStyles: {
            fillColor: [245, 245, 245],
        }
    });

    pdf.save(name);
};

async function getImageDataUrl(url: string): Promise<string> {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}