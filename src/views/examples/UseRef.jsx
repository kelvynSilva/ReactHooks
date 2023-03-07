import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SelectTitle from '../../components/layout/SectionTitle'

const marge = function (s1, s2) {
    return [...s1].map((e, i) => {
        return `${e}${s2[i] || ""}`
    }).join("")
}

const UseRef = (props) => {
    const [valoe1, setVale1] = useState("");
    const [valoe2, setVale2] = useState("");

    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);


    useEffect(() => {
        count.current = count.current + 1;
        myInput2.current.focus();
    }, [valoe1]);

    useEffect(() => {
        count.current = count.current + 1;
        myInput1.current.focus();
    }, [valoe2]);


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SelectTitle title="Exercício #01" />
            <div className='center'>
                <div>
                    <span className='text'>Valor: </span>
                    <span className='text'>{marge(valoe1, valoe2)}</span>
                    <span className='text'> [<span className='text red'>{count.current}</span>]</span>
                </div>
                <input type="text" className="input"
                    ref={myInput1}
                    value={valoe1} onChange={e => setVale1(e.target.value)} />
            </div>

            <SelectTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2}
                    value={valoe2} onChange={e => setVale2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
