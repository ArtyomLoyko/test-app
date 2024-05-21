import { Chart } from 'react-charts'
import { useChart } from './hooks/useChart'
import { Filters } from './components/Filters'
import ResizableBox from './components/ResizableBox'

function App() {
  const {
    model,
    type,
    onModelChange,
    onTypeChange,
    data,
    primaryAxis,
    secondaryAxes,
  } = useChart()

  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-12'>
      <Filters
        model={model}
        type={type}
        onModelChange={onModelChange}
        onTypeChange={onTypeChange}
      />
      <ResizableBox
        width={window.innerWidth * 0.8}
        height={window.innerHeight * 0.6}
      >
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </div>
  )
}

export default App
