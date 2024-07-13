import HeaderWidget from './components/HeaderWidget';
import TabWidget from './components/Widgets/TabWidget';
import MarkPopUpWidget from './components/Widgets/MarkPopUpWidget';



export const metadata = {
  title: 'Heyfood | Stores',
}



export default function Home() {
  return <>  
<MarkPopUpWidget/>
<main>
<HeaderWidget/>
<div className="pt-[150px] md:pt-[90px]">
<TabWidget/>
</div>
</main>
</>


}
