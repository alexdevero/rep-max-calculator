// https://www.bodybuilding.com/fun/other7.htm
// https://www.athlegan.com/calculate-1rm
import * as React from 'react'

interface TableResultsInterface {
  reps: number
  weight: number
}

export const TableResults = (props: TableResultsInterface) => {
  const [repMax, setRepMax] = React.useState(0)

  React.useEffect(() => {
    const rm = props.weight / (1.0278 - 0.0278 * props.reps)
    setRepMax(rm)
  }, [props.weight, props.reps])

  return (
    <table className="table-results">
      <tbody>
        <tr>
          <td>100% 1RM</td>
          <td>{Math.round((repMax / 100) * 100)}</td>
        </tr>

        <tr>
          <td>95% 1RM</td>
          <td>{Math.round((repMax / 100) * 95)}</td>
        </tr>

        <tr>
          <td>90% 1RM</td>
          <td>{Math.round((repMax / 100) * 90)}</td>
        </tr>

        <tr>
          <td>85% 1RM</td>
          <td>{Math.round((repMax / 100) * 85)}</td>
        </tr>

        <tr>
          <td>80% 1RM</td>
          <td>{Math.round((repMax / 100) * 80)}</td>
        </tr>

        <tr>
          <td>75% 1RM</td>
          <td>{Math.round((repMax / 100) * 75)}</td>
        </tr>

        <tr>
          <td>70% 1RM</td>
          <td>{Math.round((repMax / 100) * 70)}</td>
        </tr>

        <tr>
          <td>65% 1RM</td>
          <td>{Math.round((repMax / 100) * 65)}</td>
        </tr>

        <tr>
          <td>60% 1RM</td>
          <td>{Math.round((repMax / 100) * 60)}</td>
        </tr>

        <tr>
          <td>55% 1RM</td>
          <td>{Math.round((repMax / 100) * 55)}</td>
        </tr>

        <tr>
          <td>50% 1RM</td>
          <td>{Math.round((repMax / 100) * 50)}</td>
        </tr>

        <tr>
          <td>45% 1RM</td>
          <td>{Math.round((repMax / 100) * 45)}</td>
        </tr>

        <tr>
          <td>40% 1RM</td>
          <td>{Math.round((repMax / 100) * 40)}</td>
        </tr>

        <tr>
          <td>35% 1RM</td>
          <td>{Math.round((repMax / 100) * 35)}</td>
        </tr>

        <tr>
          <td>30% 1RM</td>
          <td>{Math.round((repMax / 100) * 30)}</td>
        </tr>

        <tr>
          <td>25% 1RM</td>
          <td>{Math.round((repMax / 100) * 25)}</td>
        </tr>

        <tr>
          <td>20% 1RM</td>
          <td>{Math.round((repMax / 100) * 20)}</td>
        </tr>

        <tr>
          <td>15% 1RM</td>
          <td>{Math.round((repMax / 100) * 15)}</td>
        </tr>

        <tr>
          <td>10% 1RM</td>
          <td>{Math.round((repMax / 100) * 10)}</td>
        </tr>

        <tr>
          <td>5% 1RM</td>
          <td>{Math.round((repMax / 100) * 5)}</td>
        </tr>
      </tbody>
    </table>
  )
}
