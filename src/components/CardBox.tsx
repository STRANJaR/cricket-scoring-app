import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const CardBox = ({children}) => {
    return (
        <div>
            <Card>
                {children}
            </Card>

        </div>
    )
}

export default CardBox