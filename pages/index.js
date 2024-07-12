import HeaderWidget from './components/HeaderWidget';
import TabWidget from './components/Widgets/TabWidget';



export const metadata = {
  title: 'Heyfood | Stores',
}



export default function Home() {
  return <>  
<main className=''>
<HeaderWidget/>
<div className="pt-[150px] md:pt-[90px]">
<TabWidget/>
</div>

</main>
  

</>


}
