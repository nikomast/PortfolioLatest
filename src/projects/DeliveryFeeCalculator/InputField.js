import React from 'react';

const InputField = ({ label, type, value, onChange, onBlur, dataTestId, isError, className }) => {
    const inputClassName = isError ? 'input-error' : '';

    return (
        <div className="input-field">
            <p>{label}</p>
            <input
                className={`${className} ${inputClassName}`}
                type={type}
                value={value === 0 ? '' : value.toString()}
                onChange={onChange}
                onBlur={onBlur}
                data-test-id={dataTestId}
            />
        </div>
    );
};

export default InputField;
