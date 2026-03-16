'use client';

import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField } from "@mui/material";


export default function Booking() {
    return (
        <div>
            <h1 className="text-[26pt]">
                Venue Booking
            </h1>
            <form className="w-2/4 flex flex-col gap-5">
                <TextField
                    variant="standard"
                    name="Name-Lastname"
                    label="Name-Lastname"
                    fullWidth
                />

                <TextField
                    variant="standard"
                    name="Contact-Number"
                    label="Contact-Number"
                    fullWidth
                />

                <Select variant = "standard" id="venue">
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>

                <DateReserve/>

                <button name = "Book Venue" className="h-10 px-4 bg-indigo-600 !text-white rounded">Book Venue</button>
            </form>
        </div>
    );
}