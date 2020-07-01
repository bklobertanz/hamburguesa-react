import React, {useState} from 'react';
import Aux from '../hoc/Aux';
import Toolbar from './Toolbar/Toolbar';
import Sidedrawer from './Navigation/Sidedrawer/Sidedrawer';

const Layout = props =>{

    const [layoutState, setLayoutState] = useState({
        
        showBackdrop:false
    });

    const showBackdropHandler = () =>{
        const prevLayoutState = {...layoutState};
        setLayoutState({...prevLayoutState,showBackdrop:!prevLayoutState.showBackdrop})
    }
        return (
                <Aux>
                    <Sidedrawer 
                        closed={showBackdropHandler}
                        show ={layoutState.showBackdrop} />
                    <Toolbar
                        backdropHandler={showBackdropHandler}/>
                    <main>
                        {props.children}
                    </main>
                </Aux>
        );
}
export default Layout;
