import {Card, Icon, Text, OptionList, Button, Popover} from "@shopify/polaris";
import {Address} from "./Addresses";
import './settings.css'
import {ChevronLeftIcon, ChevronRightIcon} from "@shopify/polaris-icons";
import React, {useCallback, useState} from "react";
import {buildTimeValue} from "@testing-library/user-event/dist/utils";
export function Settings(){
        const [selected, setSelected] = useState([]);
        const [selected2, setSelected2] = useState([]);
        const [popoverActive, setPopoverActive] = useState(true);
        const [popoverActive2, setPopoverActive2] = useState(true);

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
                Pickup:<span style={{ marginLeft: '10px' }}/>{selected.length > 0 ? selected[0] : ''}
            </Button>
);
const activator2 = (
            <Button onClick={togglePopoverActive2} disclosure>
                Designation:<span style={{ marginLeft: '10px' }}/>{selected2.length > 0 ? selected2[0] : ''}
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
            <div>
                <Card>
                        <Text variant={'headingMd'} as={'h1'}>S&S Weight & Fees Calculator</Text>
                    <div>
                        <Text as={'h3'} variant={'headingMd'}>
                            Shipping Routes
                        </Text>

                    </div>
                    <div style={{display: "flex", justifyContent: "flex-start", gap: "50px"}}   >
                        <div >
                            <Popover
                                active={popoverActive}
                                activator={activator}
                                onClose={togglePopoverActive}
                            >
                                <OptionList
                                    onChange={setSelected}
                                    options={[
                                        {value: 'PAK', label: 'PAK'},
                                        {value: 'Italy', label: 'Italy',},
                                        {value: 'Egypt', label: 'Egypt'},
                                        {value: 'USA', label: 'USA',},
                                    ]}
                                    selected={selected}
                                />
                            </Popover>
                        </div>
                        <div>
                            <Popover
                                activator={activator2}
                                active={popoverActive2}
                                onClose={togglePopoverActive2}>
                                <OptionList selected={selected2} onChange={setSelected2}
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
                    <div>
                        <Text as={'h2'}>Weight</Text>

                    </div>




                </Card>
            </div>
        </div>
    )
}