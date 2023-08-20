import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    };

    const styles = {
        onhover: { backgroundColor: 'white' }
    };

    return (
        <div className='alert alert-secondary' style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem', backgroundColor: '#33FF49', color: 'white' }}>
                Currency
                <select
                    name='hover_color'
                    id='currency'
                    onChange={(event) => changeCurrency(event.target.value)}
                    style={{ ...styles, marginLeft: '1rem', backgroundColor: '#33FF49', color: 'white', border: 'none', flex: 1 }}
                >
                    <option style={{ color: 'black', ...styles }} value="£">
                        £ Pound
                    </option>
                    <option style={{ color: 'black', ...styles }} value="$">
                        $ Dollar
                    </option>
                    <option style={{ color: 'black', ...styles }} value="€">
                        € Euro
                    </option>
                    <option style={{ color: 'black', ...styles }} value="₹">
                        ₹ Rupee
                    </option>
                </select>
            </label>
        </div>
    );
};

export default Currency;