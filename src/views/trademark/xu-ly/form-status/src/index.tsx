import { FormInstance, InputNumber } from "antd";

import { BasicForm } from "/@/components/Form";
import { MODE } from "/@/utils";
import { useComponentRegister } from "/@/components/Form/src/hook/useComponentRegister";

import { dataConfig } from "./data.config";
import SelectImg from "./selectImg";

function StatusForm({ mode, form }: { mode: MODE, form: FormInstance }) {
    useComponentRegister("SelectImg", <SelectImg />)
    return (
        <div>
            <BasicForm dataForm={dataConfig()} formSchema={form} mode={mode} />
        </div>
    )
}

export default StatusForm