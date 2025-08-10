import { FinancialReport } from '@/types/data';
import { financial } from '../data/financial';


export default function FinancialReport() {
    const finance = financial as FinancialReport[];
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="mb-4 text-2xl font-semibold">Document Library</h1>

            <div className="overflow-x-auto rounded-lg bg-white shadow">
                <table className="min-w-full table-auto">
                    <thead className="sticky top-0 bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium">#</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Year</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Month</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Description</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Upload Date</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">PDF Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sampleDocuments.map((doc) => (
                            <tr key={doc.id} className="border-t transition-colors hover:bg-gray-50">
                                <td className="px-4 py-3 text-sm">{doc.id}</td>
                                <td className="px-4 py-3 text-sm">{doc.year}</td>
                                <td className="px-4 py-3 text-sm">{doc.month}</td>
                                <td className="px-4 py-3 text-sm">{doc.description}</td>
                                <td className="px-4 py-3 text-sm">{new Date(doc.uploadDate).toLocaleDateString()}</td>
                                <td className="px-4 py-3 text-sm">{doc.pdfViews}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
