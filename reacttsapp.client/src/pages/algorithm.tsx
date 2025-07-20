import FibonacciCalculator from "../components/Fibonacci";
import NumberSorter from "../features/numSorter/NumSorter";
import PangramChecker from "../features/pangram/PangramChecker";

export default function AlgorithmDemo() {
    return (
        <>
            <div className="w-90 center">
                <h1>Pangram Checker with Redux</h1>
                <PangramChecker />
                <br />
                <NumberSorter/>
                <br />
                <FibonacciCalculator/>
            </div>
        </>
    )

}