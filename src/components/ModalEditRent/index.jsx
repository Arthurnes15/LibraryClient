import { useState } from "react";
import { Label } from "../Label";
import { Input } from "../Input";
import { Button } from "../Button";
import { SvgClose } from "../Icons/close";
import Axios from "axios";
import './styles.css'

export const ModalEditRent = ({ id_rent, open, close }) => {
    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleUpdateDateReturn = () => {
        Axios.put("http://localhost:3001/editRent", {
            rent_id: id_rent,
            date_return: values.date_return
        })
        document.location.reload();
    };

    if (open) {
        return (
            <div className="background-edit" >
                <div id="modal-edit">
                    <div className="header-edit">
                        <h2>Renovar livro</h2>
                        <SvgClose onClick={close} />
                    </div>
                    <Input name={id_rent}
                        type={"hidden"}
                        onChange={handleChangeValues}
                    />

                    <Label text={"Nova data de devolução:"} />
                    <Input name={"date_return"}
                        type={"date"}
                        onChange={handleChangeValues}
                    />
                    <br />
                    <Button text={"Editar"}
                        className={"btn btn-info text-white"}
                        onClick={() => handleUpdateDateReturn()}></Button>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}