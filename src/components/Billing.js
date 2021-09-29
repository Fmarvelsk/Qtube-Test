import React, { useState } from 'react'

export default function Billing({ nextStep, goBack }) {
    const [cardName, setCardName] = useState(""),
        [cardNo, setCardNo] = useState(""),
        [cardEx, setCardEx] = useState(""),
        [cvvNo, setCvvNo] = useState(""),
        [error, setError] = useState(""),
        [valid, setValid] = useState(),
        [isValid, setIsValid] = useState(false)

    const nextForm = (e) => {
        e.preventDefault()
        let data = {
            ...cardName,
            ...cardNo,
            ...cvvNo,
            ...cardEx
        }
        nextStep()
        console.log(data)

    }

    return (
        <form onSubmit={nextForm}>
            <label className="required">Name on Card</label><br />
            <input type="text" className="input" value={cardName} onChange={(e) => setCardName(e.target.value)} required />

            <label className="required">Card Type</label><br />

            <select className="input" required>
                <option value="visa">VISA</option>
                <option value="masterCard">MASTER CARD</option>
                <option value="verve">VERVE</option>
            </select>

            <div className="flex w-100">
                <div className="mw-2">
                <label className="required">Card Details</label><br />
                <input type="text" className="input" value={cardNo} onChange={(e) => setCardNo(e.target.value)} required />
                   </div>
                    <div className="w-1">
                <label className="required">Expiry date</label><br />
                <input type="text" className="input" value={cardEx} onChange={(e) => setCardEx(e.target.value)} required />
                    </div>

                <div className="w-1">
                    <label className="required">CVV</label><br />
                    <input type="number" className="input" maxlength="3" value={cvvNo} onChange={(e) => setCvvNo(e.target.value)} required />
                </div>
            </div>

            <div style={{
                display: 'flex',
                gap: '40px'
            }}>
                <button type="submit" className="btn">
                    Next
                </button>
                <button type="submit" className="btn-cancel" onClick={() => goBack()}>
                    Cancel Payment
                </button>
            </div>
            {error ? <div className="err-msg">{error}</div> : null}

        </form>

    )
}