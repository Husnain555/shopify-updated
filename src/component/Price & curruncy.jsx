import {Box, Card, FormLayout, LegacyCard, Text, TextField} from "@shopify/polaris";
import {useState} from "react";

export function Price (){
    const [costOfKg,setCostOfKg] = useState('')
    const [grossMargin,setGrossMargin] = useState('')
    const [blackmarket,setBlackmarket] = useState('')
    const [finalBlackmarket,setFinalBlackmarket] = useState('')
    return (
        <div style={{ width: "60%" ,margin:"30px" }}>
            <div style={{marginBottom:'20px'} }>
                <Text variant={'headingLg'} as={'h2'}>Clique Settings</Text>
            </div>
            <Card>
                   <div style={{marginBottom:'20px'}}>
                       <Text variant={'headingXl'} as={'h1'}>
                           Price & Currency Settings
                       </Text>
                   </div>

              <div  style={{padding:'13px'}}>
                  <div style={{marginBottom:'10px'}}>
                      <Text variant={'headingLg'} as={'h3'}>
                          Price & Parameters
                      </Text>
                  </div>
                  <div style={{display:"flex", justifyContent:"flex-start",gap:"10px"}}>
                      <TextField
                          label="Cost of KG   "
                          value= {costOfKg}
                          onChange={(value) => setCostOfKg(value)}
                          prefix="$"
                          type="number"
                          autoComplete="off"
                      />
                      <TextField
                          label={'Gross Margin      '}
                          suffix={'%'}
                          type='number'
                          autoComplete={'off'}
                          value={grossMargin}
                          onChange={(value)=>{setGrossMargin(value)}}
                      />
                  </div>
                  <div style={{marginBottom:'10px',marginTop:'10px'}}>
                      <Text variant={'headingLg'} as={'h1'}>
                          Currency Parameters
                      </Text>
                  </div>
                  <div style={{display:"flex", justifyContent:"flex-start",gap:"10px"}}>
                      <TextField
                          label={'Black Market EGP Markup'}
                          autoComplete={'off'}
                          prefix={'E£'}
                          type={'number'}
                          value={blackmarket}
                          onChange={(value)=>{setBlackmarket(value)}}
                      />
                      <TextField label={'Final Black Market Price'}
                                 autoComplete={'off'}
                                 prefix={'E£'}
                                 value={finalBlackmarket}
                                 type={'number'}
                                 disabled='true'
                                 onChange={(value)=>{setFinalBlackmarket(value)}}
                      />
                  </div>
              </div>


            </Card>
        </div>
    )
}   