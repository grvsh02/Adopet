import React from 'react';
import {FormControl} from "@mui/material";
import {FormLabel} from "@mui/material";
import {FormControlLabel} from "@mui/material";
import {RadioGroup} from "@mui/material";
import {Radio} from "@mui/material";

const FilterBar = () => {

    const [type, setType] = React.useState('All');

    return (
        <div className="flex h-2/3 mt-6 rounded-2xl shadow-md">
            <div className="m-6">
                <div className="flex">
                    <div className="m-2">
                        Type
                    </div>
                    <div className="m-5">
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="dog" control={<Radio />} label="Dog" />
                                <FormControlLabel value="Cat" control={<Radio />} label="Cat" />
                                <FormControlLabel value="Hamster" control={<Radio />} label="Hamster" />
                                <FormControlLabel value="Others" control={<Radio />} label="Others" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <div className="flex">
                    <div className="m-2">
                        Age
                    </div>
                    <div className="m-5">
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="s" control={<Radio />} label="0-3" />
                                <FormControlLabel value="m" control={<Radio />} label="3-6" />
                                <FormControlLabel value="o" control={<Radio />} label="6-9" />
                                <FormControlLabel value="a" control={<Radio />} label="9+" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBar;