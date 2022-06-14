import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './search.css'
import { Search, Person } from '@material-ui/icons'

const SearchFilter = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  return (
    <>
      <form className='datepicker_form p-2'>
        <h1>Search</h1>
        <div>
          <label className='' for='destination name'>
            Destination/property name:
          </label>
        </div>
        <div className='search_icon form-group'>
          <Search className='search-icon' />
          <input
            type='search'
            id='destinatin name'
            name='destination name'
            className='form-control date_input'
            value=''
            placeholder=''
          />
        </div>
        <div>
          <label For='check-in date'>Check-in Date</label>
        </div>
        <div className='calender_icon'>
          <DatePicker
            placeholderText='Check-in Date'
            dateFormat='MMMM d, yyyy'
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => setStartDate(date)}
            className=' form-control datepicker_input'
          />
        </div>
        <div>
          <label For='check-in date'>Check-out Date</label>
          <DatePicker
            placeholderText='Check-out Date'
            dateFormat='MMMM d, yyyy'
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            onChange={(date) => setEndDate(date)}
            className='form-control datepicker_input'
          />
        </div>
        <div className='requirements'>
          <div>
            <label for='rooms'>Rooms</label>
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
          <div className='adults_childrens'>
            <label for='adults'>Adults</label>
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
          <div className='adults_childrens'>
            <label for='chlidren'>Childrens</label>
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

        <div className='form-check travel-form'>
          <input
            className='form-check-input check-input form-control'
            type='checkbox'
            value=''
            id='flexCheckDefault'
          />
          <label
            className='form-check-label travel-label'
            for='flexCheckDefault'
          >
            I'm traveling for work
          </label>
        </div>
        <button className='button form-control'>Search</button>
      </form>
    </>
  )
}

export default SearchFilter
