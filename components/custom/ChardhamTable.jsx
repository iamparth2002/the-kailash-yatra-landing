import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { chardhamData, headingList } from "@/utils/data"

import { Clock, MapPin, Mountain } from 'lucide-react'

export default function ChardhamTable() {
    return (
        <div className="w-full max-w-7xl mx-auto py-16 px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0a1435] mb-4 tracking-tight">
                    {headingList?.heading5.heading}
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    {headingList?.heading5.subHeading}

                </p>
                <div className="w-32 h-1.5 bg-teal-200 mx-auto rounded-full"></div>
            </div>

            <div className="border rounded-xl overflow-hidden bg-white shadow-lg">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-teal-500  hover:bg-teal-500">
                                <TableHead className="min-w-[200px] text-white font-semibold text-base py-6 px-4">
                                    Temple Name
                                </TableHead>
                                <TableHead className="min-w-[200px] text-white hidden md:table-cell font-semibold text-base py-6">
                                    Location
                                </TableHead>
                                <TableHead className="min-w-[150px] text-white font-semibold text-base py-6">
                                    Opening Time
                                </TableHead>
                                <TableHead className="min-w-[150px] text-white font-semibold text-base py-6">
                                    Closing Time
                                </TableHead>
                                <TableHead className="min-w-[150px] text-white hidden sm:table-cell font-semibold text-base py-6">
                                    Elevation
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {chardhamData.map((temple) => (
                                <TableRow
                                    key={temple.id}
                                    className="border-b transition-colors hover:bg-slate-50/50"
                                >
                                    <TableCell className="font-medium text-[#0a1435] py-6 px-4">
                                        {temple.name}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell py-6">
                                        <div className="flex items-center gap-2.5">
                                            <div className="bg-slate-100 p-2 rounded-md">
                                                <MapPin className="h-4 w-4 text-slate-600" />
                                            </div>
                                            <span className="text-slate-600">{temple.location}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-6">
                                        <div className="flex items-center gap-2.5">
                                            <div className="bg-green-100 p-2 rounded-md">
                                                <Clock className="h-4 w-4 text-green-600" />
                                            </div>
                                            <span className="text-slate-600">{temple.openingTime}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-6">
                                        <div className="flex items-center gap-2.5">
                                            <div className="bg-red-100 p-2 rounded-md">
                                                <Clock className="h-4 w-4 text-red-600" />
                                            </div>
                                            <span className="text-slate-600">{temple.closingTime}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell py-6">
                                        <div className="flex items-center gap-2.5">
                                            <div className="bg-slate-100 p-2 rounded-md">
                                                <Mountain className="h-4 w-4 text-slate-600" />
                                            </div>
                                            <span className="text-slate-600">{temple.elevation}</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

