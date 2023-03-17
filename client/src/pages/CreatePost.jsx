import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import {getRandomPrompt} from '../utils'
import { FormField,Loader } from '../components'
const CreatePost = () => {
const navigate = useNavigate();

const [form, setform] = useState({
name:'',
prompt:'',
photo:'',

});
const [generatingImg, setgeneratingImg] = useState(false);
const [loading, setloading] = useState(false);

const handleSubmit = () => {

}
const handleChange = (e) => {

}
const handleSurpriseMe = () => {

}

  return (
    <section className='max-w-7xl mx-auto'>
       <div>
        <h1 className="font-extrablod text-[#222328] text-[32px]">
          Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]">
          tao hinh anh bang Dall-E AI va share 
        </p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
         <div className='flex flex-col gap-5'>
          <FormField 
          labelName = "your name"
          type = "text"
          name="tuan"
          placeholder ="tuan"
          value={form.name}
          handLeChange={handleChange}
          />
           <FormField 
          labelName = "Prompt"
          type = "text"
          name="prompt"
          placeholder ="a stained glass window depicting a hamburger and french fries"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
          />
              <div className='relative bg-gray-50 border border-gray-300 
              text-gray-900 text-sm rounded-lg forcus:ring-blue-500 forcus:border-500 w-64 p-3
              h-64 flex justify-center items-center'>
                {form.photo ? (
                  <img 
                  src={form.photo}
                    alt={form.prompt}
                    className="w-full h-full object-contain"
                  />
                ):(
                  <img 
                  src={preview}
                  alt="preview"
                  className='w-9/12 h-9/12 object-contain opacity-40'
                  
                  />
                )}

                {generatingImg && (

                  <div></div>
                )}
              </div>
         </div>
      </form>
    </section>
  )
}

export default CreatePost