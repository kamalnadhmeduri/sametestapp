import React, { useState } from 'react';
import './BodyComponent.css';
import Requisitions from './Requisitions';
import HoldForDatesComponent from './HoldForDatesComponent';
import ReferralsComponent from './ReferralsComponent';


function BodyComponent() {
    const [RequisitionsTab, setRequisitionsTabActive] = useState(true);
    const [ReferralsTab, setReferralsTabActive] = useState(false);
    const [HoldForDatesTab, setHoldForDatesTabActive] = useState(false);

    const handleClick=(event)=>{
        const activeTab = event.target.id;
        if(activeTab=== 'RequisitionsTab'){
            setRequisitionsTabActive(true);
            setReferralsTabActive(false);
            setHoldForDatesTabActive(false);
        }
        if(activeTab=== 'ReferralsTab'){
            setRequisitionsTabActive(false);
            setReferralsTabActive(true);
            setHoldForDatesTabActive(false);
        }
        if(activeTab=== 'HoldForDatesTab'){
            setRequisitionsTabActive(false);
            setReferralsTabActive(false);
            setHoldForDatesTabActive(true);
        }
    }
  return (
    <div className="bodyComponent">
        <div className='leftContent'>
            <div id='RequisitionsTab' className={!RequisitionsTab?'leftNavButtons': 'leftNavButtonActive'} onClick={(event)=>handleClick(event)}>
                Requisitions
            </div> 
            <div id='ReferralsTab' className={!ReferralsTab?'leftNavButtons': 'leftNavButtonActive'} onClick={(event)=>handleClick(event)}>
                Referrals
            </div>
            <div id='HoldForDatesTab' className={!HoldForDatesTab?'leftNavButtons': 'leftNavButtonActive'} onClick={(event)=>handleClick(event)}>
                Hold for dates
            </div>   
        </div>
        <div className='rightContent'>
            {RequisitionsTab && <Requisitions/>}
            {ReferralsTab && <ReferralsComponent/>}
            {HoldForDatesTab && <HoldForDatesComponent/>}
        </div>
    </div>
  );
}

export default BodyComponent;
