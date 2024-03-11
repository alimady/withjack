import Pusher from 'pusher-js';
export const LikePush=(reciever_id)=>{
    var pusher = new Pusher("987070fa3dfa9fe0df7d", {
        cluster: "ap2",
      });
      const channel = pusher.subscribe("ReactionOnUser"+reciever_id);
      return channel;
 
      

}
