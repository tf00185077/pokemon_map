import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,Button,Heading
  } from '@chakra-ui/react'
  import {useEffect} from 'react'
export default  function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
        onOpen()
    },[])
    return (
      <>
        <Button onClick={onOpen}>使用指南</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>使用指南</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Heading size="md">透過選單先選擇右邊的敵人，再選擇左邊的攻擊者，將會依據攻擊者的技能傷害、屬性以及對手的屬性，自動計算出擁有的招式中，傷害最高的技能。</Heading>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }