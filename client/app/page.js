import ExampleClientComponent from "./components/ExampleClientComponent"
import ExampleServerComponent from "./components/ExampleServerComponent"
import FetchingDataSample1 from "./components/FetchingDataSample1"

export default function Page() {
  return (
    <main className='px-6 mx-auto'>
      <p className='mt-12 mb-12 text-3xl text-center'>
        Next js official 👋 &nbsp; Kaka
      </p>
      <ExampleClientComponent>
        <ExampleServerComponent />
      </ExampleClientComponent>
      <FetchingDataSample1 />
    </main>
  )
}
