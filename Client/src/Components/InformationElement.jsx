import React from 'react';
import { Stack , Box , Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function InformationElement({ field , value }) {
  return (
    <div>
        <Stack direction='column' spacing={1}>
            <div>
                <Typography variant='subtitle1' sx={{color: grey['600']}}>
                    {field}
                </Typography>
            </div>

            <Box sx={{border: `2px solid ${grey['400']}`, 'border-radius': '5px', pt: 1, pl: 2, pr: 1, pb: 1}}>
                <Typography variant='subtitle1' sx={{fontWeight: 600, color: grey['800']}}>
                    {value}
                </Typography>
            </Box>

        </Stack>
    </div>
  )
}
