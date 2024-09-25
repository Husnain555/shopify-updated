import {Card, Icon, Text, OptionList, Button, Popover, TextField} from "@shopify/polaris";
import {Address} from "./Addresses";
import './settings.css'
import {ChevronLeftIcon, ChevronRightIcon} from "@shopify/polaris-icons";
import React, {useCallback, useState} from "react";
export function Settings(){
        const [pickup, setPickup] = useState([]);

        const [desigination, setDesigination] = useState([]);
        const [popoverActive, setPopoverActive] = useState(false);
        const [popoverActive2, setPopoverActive2] = useState(false);
           const [weight , setWeight] = useState('')
           const [weight2 , setWeight2] = useState('')


        const togglePopoverActive = useCallback(
            () => setPopoverActive((popoverActive) => !popoverActive),
            []
        );
        const togglePopoverActive2 = useCallback(
            () => setPopoverActive2((popoverActive2) => !popoverActive2),
            []
        );


    const activator = (
            <Button onClick={togglePopoverActive} disclosure>
                Pickup:<span style={{ marginLeft: '10px' }}/>{pickup.length > 0 ? pickup[0] : ''}
            </Button>
);
const activator2 = (
            <Button onClick={togglePopoverActive2} disclosure>
                Designation:<span style={{ marginLeft: '10px' }}/>{desigination.length > 0 ? desigination[0] : ''}
            </Button>
);

    return (

        <div>
            <div style={{padding: '30px'}}>
                <Text variant={'headingXl'} as={'h3'}>
                    Settings
                </Text>
                <div className={'Address'} style={{width: '60%', marginTop: '20px'}}>
                    <Card>
                        <Text as={'h1'} variant={'headingLg'} fontWeight={'bold'}>
                            S&S Address
                        </Text>
                        <div style={{display: "flex", justifyContent: "flex-start", gap: "10px"}}>
                            <div>
                                <div style={{marginTop: '30px'}}>
                                    <Address/>
                                </div>
                                <div style={{marginTop: '40px'}}>
                                    <Address/>
                                </div>
                                <div style={{marginTop: '40px'}}>
                                    <Address/>
                                </div>
                            </div>
                            <div style={{marginTop: '10px', borderWidth: 'thin', border: '1px solid lightgrey'}}>

                            </div>
                            <div>
                                <div style={{marginTop: '30px'}}>
                                    <Address/>
                                </div>
                                <div style={{marginTop: '40px'}}>
                                    <Address/>
                                </div>
                                <div style={{marginTop: '40px'}}>
                                    <Address/>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop: '30px', display: 'flex', justifyContent: 'flex-end'}}>
                            <button style={{border: 'none', background: 'transparent', cursor: 'pointer'}}><Icon
                                source={ChevronLeftIcon} tone="base"/></button>
                            <button style={{border: 'none', background: 'transparent', cursor: 'pointer'}}><Icon
                                source={ChevronRightIcon} tone="base"/></button>
                        </div>


                    </Card>
                </div>
            </div>
            <div style={{width: '61%', marginTop: '5px',padding: '30px'}}>
                <Card>
                        <Text variant={'headingXl'} as={'h1'}>S&S Weight & Fees Calculator</Text>
                    <div style={{padding:'20px'}}>
                        <div>
                            <Text as={'h3'} variant={'headingLg'}>
                                Shipping Routes
                            </Text>

                        </div>
                        <div style={{display: "flex", justifyContent: "flex-start", gap: "50px",marginTop:'20px'}}>
                            <div>
                                <Popover
                                    active={popoverActive}
                                    activator={activator}
                                    onClose={togglePopoverActive}
                                >
                                    <OptionList
                                        onChange={setPickup}
                                        options={[
                                            {value: 'PAK', label: 'PAK'},
                                            {value: 'Italy', label: 'Italy',},
                                            {value: 'Egypt', label: 'Egypt'},
                                            {value: 'USA', label: 'USA',},
                                        ]}
                                        selected={pickup}
                                    />
                                </Popover>
                            </div>
                            <div>
                                <Popover
                                    activator={activator2}
                                    active={popoverActive2}
                                    onClose={togglePopoverActive2}>
                                    <OptionList selected={desigination} onChange={setDesigination}
                                                options={[
                                                    {
                                                        value: 'Italy',
                                                        label: 'Italy',
                                                    }, {
                                                        value: 'USA',
                                                        label: 'USA',
                                                    },
                                                    {
                                                        value: 'Italy',
                                                        label: 'Italy',
                                                    }, {value: 'PAK', label: 'PAK'},

                                                ]}


                                    />

                                </Popover>
                            </div>
                        </div>
                        <div style={{marginTop:'20px'}}><Text variant={'headingMd'} as={'h2'}>Weight</Text></div>
                        <div style={{width: '20%'}}><TextField
                            size={'medium'}
                            autoComplete={'off'}
                            label={''}
                            type={'number'}
                            value={weight}
                            suffix={'KG'}

                            onChange={(value) => {
                                setWeight(value)
                            }}>
                        </TextField></div>
                        <div style={{marginBottom:'20px'}}><Text variant={'headingMd'} as={'h2'}>Final Price</Text></div>

                        <div style={{width: '20%'}}><TextField
                            size={'medium'}
                            autoComplete={'off'}
                            label={'Price Of 1KG'}
                            type={'number'}
                            value={weight2}
                            prefix={'$'}
                            onChange={(value) => {
                                setWeight2(value)
                            }}>
                        </TextField></div>


                    </div>


                </Card>
            </div>
        </div>
    )
}