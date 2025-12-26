import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashboardContext } from '../pages/DashboardLayout';
const SmallSidebar = () => {
    const val = useDashboardContext();
    console.log(val);
  return (
    <Wrapper>
      SmallSideBar
    </Wrapper>
  )
}
export default SmallSidebar
