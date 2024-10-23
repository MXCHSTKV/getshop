"use client"
import { useState } from 'react'
import Button from './button'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const borderColor = error ? 'border-error' : 'border-gray_01'

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    validateEmail(email) ? setError('') : setError('Неправильно указана почта')
  }

  return (
    <div className="lg:w-[560px] w-[688px] lg:h-[215px] h-[232px]">
        <input className={`lg:w-[560px] w-[688px] h-[48px] mb-[32px] bg-gray_03 border-b ${borderColor} focus:outline-none focus:border-gray_01`} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Введите ваш e-mail" />
        {error ? <p className="absolute mt-[-32px] text-[10px] text-error">{error}</p> : null}
        <div className="mb-[48px] lg:w-[560px] w-[688px] h-[40px] flex">
            <input type="checkbox" id="terms" className="w-[14px] h-[14px] mt-[4px] accent-orange" />
            <label htmlFor="terms" className="block lg:w-[438px] w-[660px] h-[40px] ml-2 text-[14px]">
                Я ознакомлен(а) с политикой конфиденциальности&nbsp;и согласен(на) на обработку персональных данных.
            </label>
        </div>
        <Button color="bg-black" name="Отправить" width="w-full" onClick={onSubmit}/>
    </div>
  );
}