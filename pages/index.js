import HeaderWidget from './components/HeaderWidget';
import TabWidget from './components/Widgets/TabWidget';
import MarkPopUpWidget from './components/Widgets/MarkPopUpWidget';
import {fetchRestaurants, fetchTags} from '../services/api';



export const metadata = {
  title: 'Heyfood | Stores',
}



export default function Home() {
  return <>  
  <MarkPopUpWidget/>
<main className=''>
<HeaderWidget/>
<div className="pt-[150px] md:pt-[90px]">
<TabWidget/>
</div>

</main>
  

</>


}
