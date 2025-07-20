import EditableFormTable from "../components/form_grid";
import Counter from "../features/counter/counter";

export default function FormDemo() {

    return (
        <>
            <div className="w-90 center">
                <h1>Static Form</h1>
                <EditableFormTable />
                <br />
                <h1>Redux Action</h1>
                <Counter />
            </div>
        </>
    )

}