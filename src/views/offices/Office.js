import { CContainer,CRow,CCol,CCard,CCardHeader,CCardBody,CCardTitle,CCardText } from '@coreui/react'
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { fincoDefault } from 'src/axios/axiosinstance'
import { getToken } from 'src/globalfun/globalfun'
import Tables from './tables'
import { Icon } from '@iconify/react';


const Office = () => {
  const [data, setDatas] = useState([])
  const token = getToken();
  useEffect(()=>{
       const getOffice = async()=>{
           try{
               const response = await fincoDefault.get(`/finco/api/auth/office/list`,{
                                   headers:{
                                       "token":`${token}`
                                   }
                                   }) 
               setDatas(response.data)
           }catch(err){
               console.log(err)
           }
       }
       getOffice()
  },[])

  return (
      <>
          <CContainer>
            <CRow>
                <CCol xs="12">
                    <CCard style={{background:"#60779f"}}>
                        <CCardHeader component="h5" >
                            <Icon icon="cil:library-building" width="50" height="30" inline={true} className="text-white"/>
                             <span className='d-inline-block text-white'>
                                Office Details
                            </span>
                        </CCardHeader>
                          <CCardBody>
                                <Tables data={data}/>
                          </CCardBody>
                      </CCard>
                </CCol>
            </CRow>
          </CContainer>
      </>
  )
}

export default Office