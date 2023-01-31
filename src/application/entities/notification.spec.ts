import { Content } from "./content"
import { Notification } from "./notification"

describe('Notification ',()=>{
    it(' should be able to create a notification',()=>{
        const notification = new Notification({
            content:new Content('Nova solicataçao de amizdade'),
            category:'social',
            recipientId:'example',
            createdAt:new Date(),
        })
        expect(notification).toBeTruthy()
    })

  
})

