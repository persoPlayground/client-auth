import React from 'react';
import  requireAuth from './requireAuth';
const Message =  () => <div>Message</div>

export default requireAuth(Message);