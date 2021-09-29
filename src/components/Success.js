import React from 'react'

export default function Success() {
    return (
        <div class="succ">
            <div className="b-g pb-g">
                <label class="_label">
                    <span class="label__text">
                        <span class="label__check">
                            <i class="fa fa-check icon"></i>
                        </span>
                    </span>
                </label>
                <h1 className="-m cyn-color">Purchase Completed</h1>

                <div>
                    Please check your email details concerning this transaction
                </div>
                <div
                    style={{
                        marginTop: '1.5rem'
                    }}>

                    <a className="return"
                        href="/">Return Home</a>
                </div>
            </div>

        </div>
    )
}