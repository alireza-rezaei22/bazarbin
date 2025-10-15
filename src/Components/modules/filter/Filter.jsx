import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { ChevronDown } from 'lucide-react'
function Filter() {
    return (
        <div
            className='w-full flex-wrap justify-start hidden
                    md:flex md:h-fit md:flex-col md:items-start md:p-2 md:space-y-2 md:border md:rounded-md
                '>
            {/* {routes.map((route, index) => {
                return <CategoryItem key={index} {...route} />
            })} */}
            <h2>فیلتر</h2>
            <Accordion className='w-full' >
                <AccordionSummary
                    expandIcon={<ChevronDown />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">ترتیب</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <span>
                        <h3>ارزان ترین</h3>
                        <input type="radio" id="cheepest" value="cheepest" defaultChecked={false} />
                    </span>
                    <span>
                        <h3>گران ترین</h3>
                        <input type="radio" id="expensivest" value="expensivest" defaultChecked={false} />
                    </span>
                    <span>
                        <h3>پرفروش ترین</h3>
                        <input type="radio" id="Bestselling" value="Bestselling" defaultChecked={false} />
                    </span>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ChevronDown />}>
                    <Typography component="span">قیمت</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <h3>from</h3>
                        <input type="text" className="w-1/2"
                        />
                    </div>
                    <div>
                        <h3>to</h3>
                        <input type="text" className="w-1/2"/>
                    </div>

                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full' >
                <AccordionSummary
                    expandIcon={<ChevronDown />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">وضعیت</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <span>
                        <h3>نو</h3>
                        <input type="radio" id="cheepest" value="cheepest" defaultChecked={false} />
                    </span>
                    <span>
                        <h3>درحد نو</h3>
                        <input type="radio" id="expensivest" value="expensivest" defaultChecked={false} />
                    </span>
                    <span>
                        <h3>کارکرده</h3>
                        <input type="radio" id="Bestselling" value="Bestselling" defaultChecked={false} />
                    </span>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full' >
                <AccordionSummary
                    expandIcon={<ChevronDown />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">مایل به معاوضه</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <span>
                        <h3>هستم</h3>
                        <input type="radio" id="cheepest" value="cheepest" defaultChecked={false} />
                    </span>
                    <span>
                        <h3>نیستم</h3>
                        <input type="radio" id="expensivest" value="expensivest" defaultChecked={false} />
                    </span>
                </AccordionDetails>
            </Accordion>
            
        </div>
    )
}

export default Filter