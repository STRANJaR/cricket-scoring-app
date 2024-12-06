'use client';

import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const TableComponent = ({firstHead, secondHead, thirdHead, fourthHead, tCellOne, tCellTwo, tCellThree, tCellFour}) => {
    return (
        <div className='text-xs'>
            <Table>
                <TableCaption></TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">{firstHead}</TableHead>
                        <TableHead>{secondHead}</TableHead>
                        <TableHead>{thirdHead}</TableHead>
                        <TableHead className="text-right">{fourthHead}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">{tCellOne}</TableCell>
                        <TableCell>{tCellTwo}</TableCell>
                        <TableCell>{tCellThree}</TableCell>
                        <TableCell className="text-right">{tCellFour}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

export default TableComponent