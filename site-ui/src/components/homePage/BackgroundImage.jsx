import React from 'react'
// import BackgroundData from './BackgroundData'
// import Image from './Image'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import BedIcon from '@mui/icons-material/Bed'
import PersonIcon from '@mui/icons-material/Person'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { useEffect, useState } from 'react'
import './BgImage.css'

const BackgroundImage = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/617570f2-017e-4aff-bd66-1da41438633d').then(
      (result) => {
        result.json().then((resp) => {
          setData(resp)
          console.log(resp)
        })
      }
    )
  }, [setData])

  console.warn(data)
  return (
    <>
      {/* {BackgroundData.map((bgData) => {
        return <Image key={bgData} {...bgData}></Image>
      })} */}

      {data.map((curElem) => {
        return (
          <div className='container-fluid p-0'>
            <div>
              <img src={curElem.image} alt='' className='col-lg-12' />
            </div>
            <div className='text_block'>
              <h1>{curElem.description}</h1>
              <h1>{curElem.title}</h1>
            </div>
            <form className='check_in_out'>
              <div className='searching_list'>
                <div className='searching_input'>
                  <BedIcon className='going_icon' />
                  <input
                    type='search'
                    id='destinatin name'
                    name='destination name'
                    placeholder='Where are you going?'
                    className='destination_name'
                  />
                </div>
                <div className='checking_picker'>
                  <CalendarMonthIcon className='calen_icon' />
                  <div>
                    <DatePicker
                      placeholderText='Check-in'
                      dateFormat='MMMM d, yyyy'
                      selected={startDate}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      onChange={(date) => setStartDate(date)}
                      className='checking'
                    />
                  </div>
                  <div>
                    <DatePicker
                      placeholderText='Check-out'
                      dateFormat='MMMM d, yyyy'
                      selected={endDate}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      onChange={(date) => setEndDate(date)}
                      className='checking'
                    />
                  </div>
                </div>
                <div className='select_requirement'>
                  <PersonIcon className='selection_icon' />
                  <div>
                    <label for='rooms' className='select_room'>
                      Rooms
                    </label>
                    <select name='rooms' id='rooms'>
                      <option value='1'>0</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='1'>5</option>
                      <option value='2'>6</option>
                      <option value='3'>7</option>
                      <option value='4'>8</option>
                      <option value='1'>9</option>
                      <option value='2'>10</option>
                      <option value='3'>11</option>
                      <option value='4'>12</option>
                      <option value='1'>13</option>
                      <option value='2'>14</option>
                      <option value='3'>15</option>
                      <option value='4'>16</option>
                    </select>
                  </div>
                  <div>
                    <label for='adults' className='select_child'>
                      Adults
                    </label>
                    <select name='adults' id='adults'>
                      <option value='1'>0</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='1'>5</option>
                      <option value='2'>6</option>
                      <option value='3'>7</option>
                      <option value='4'>8</option>
                      <option value='1'>9</option>
                      <option value='2'>10</option>
                      <option value='3'>11</option>
                      <option value='4'>12</option>
                      <option value='1'>13</option>
                      <option value='2'>14</option>
                      <option value='3'>15</option>
                      <option value='4'>16</option>
                    </select>
                  </div>
                  <div>
                    <label for='chlidren' className='select_child'>
                      Childrens
                    </label>
                    <select name='chlidren' id='chlidren'>
                      <option value='1'>0</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='1'>5</option>
                      <option value='2'>6</option>
                      <option value='3'>7</option>
                      <option value='4'>8</option>
                      <option value='1'>9</option>
                      <option value='2'>10</option>
                      <option value='3'>11</option>
                      <option value='4'>12</option>
                      <option value='1'>13</option>
                      <option value='2'>14</option>
                      <option value='3'>15</option>
                      <option value='4'>16</option>
                    </select>
                  </div>
                </div>
                <button className='btns'>Search</button>
              </div>
            </form>
          </div>
        )
      })}
    </>
  )
}

export default BackgroundImage
