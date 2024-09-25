import {Icon, Text} from "@shopify/polaris";
import {LocationIcon} from "@shopify/polaris-icons";

export function Address() {
    return (
        <div style={{display: "flex",alignItems:"center"}}>
            <div style={{marginRight:'10px'}}>
                <Icon
                    source={LocationIcon}
                    tone="base"
                />
            </div>
           <div>
               <Text variant={'headingMd'} fontWeight={'bold'} as={'h2'}>
                   USA Address
               </Text>
               <p style={{marginTop:'3px'}}>Clique store,1321 Upland drive ,PMB 1854,Houston texes 77043,United State</p>
           </div>
        </div>
    )
}