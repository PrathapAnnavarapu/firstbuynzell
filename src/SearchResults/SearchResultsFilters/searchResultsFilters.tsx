import React from 'react'
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function SearchResultsFilters() {
    return (
        <DialogContent dividers>
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Price (AED)
                <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 4 }}>
                    <TextField
                        id="filled-search"
                        label="0"
                        type="number"
                        variant="outlined"
                        sx={{ mr: 1 }}
                    />
                    To
                    <TextField
                        id="filled-search"
                        label="2000000"
                        type="number"
                        variant="outlined"
                        sx={{ ml: 1 }}
                    />
                </Stack>
            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Year
                <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 4 }}>
                    <TextField
                        id="filled-search"
                        label="1920"
                        type="number"
                        variant="outlined"
                        sx={{ mr: 1 }}
                    />
                    To
                    <TextField
                        id="filled-search"
                        label="2024"
                        type="number"
                        variant="outlined"
                        sx={{ ml: 1 }}
                    />
                </Stack>
            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                KeyWords
                <Stack direction="row" spacing={2} sx={{ m: 1, mb: 4 }}>
                    <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="outlined"
                    />
                </Stack>
            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Regional Specs
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 4 }}>
                    <Typography gutterBottom>
                        GCC Specs
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        American Specs
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Canadian Specs
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        European Specs
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Japanese Specs
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Other
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Seller Type
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Owner
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Dealer
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Body Type
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 4 }}>
                    <Typography gutterBottom>
                        Coupe
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Cross over
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Hard Top Covertiable
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Hatchback
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Pickup Truck
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Sedan
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Transmission Type
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Mannual
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Automatic
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Highlights
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 4 }}>
                    <Typography gutterBottom>
                        Single Owner
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        In Warrenty
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Service History
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        No Accident
                    </Typography>
                    <Checkbox {...label} />
                </Stack>

            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Export Status
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 4 }}>
                    <Typography gutterBottom>
                        Local (UAE) only
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Local (UAE) and Export
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Export Only
                    </Typography>
                    <Checkbox {...label} />
                </Stack>

            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Horse Power
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 4 }}>
                    <Typography gutterBottom>
                        Less than 150 HP
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        150 - 200 HP
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        200 - 300 HP
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        300 - 400 HP
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        400 - 500 HP
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
            </Typography>

            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Technical Features
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 4 }}>
                    <Typography gutterBottom>
                        4 Wheel Drive
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        All Wheel Drive
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        All Wheel Steering
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Cruise Control
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Anti-Lock Brakes/ABS
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Extras
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 4 }}>
                    <Typography gutterBottom>
                        Air Conditioning
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Alarm/Anti -Theft System
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        AM/FM Radio
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Aux Audio In
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Bluetooth System
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Warrenty
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        No
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Yes
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Does not apply
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                No Of Cylinders
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 4 }}>
                    <Typography gutterBottom>
                        2
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        3
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        4
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        5
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        6+
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Steering Side
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 4 }}>
                    <Typography gutterBottom>
                        Left Hand Side
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Left Hand Side
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
            </Typography>
            <hr className='content-divider' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                More Filter
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 4 }}>
                    <Typography gutterBottom>
                        Show ads with photos only
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} spacing={2} sx={{ mt: 2 }}>
                    <Typography gutterBottom>
                        Show ads in English only
                    </Typography>
                    <Checkbox {...label} />
                </Stack>
            </Typography>
            <Stack direction="row" spacing={2} sx={{ width: 200, mt: 2 }}>
                <Button variant="outlined">Clear All</Button>
                <Button variant="contained">Apply</Button>
            </Stack>
        </DialogContent>
    )
}

export default SearchResultsFilters