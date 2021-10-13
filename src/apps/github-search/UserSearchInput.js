import React, { useState, useEffect } from 'react';
const UserSearchInput = ({onChange}) => {

  return (
    <>
      <div className="row">
        <div className="col-12">
          <input type="text"
            className="form-control"
            placeholder="Enter user name"
            name="username"
            onChange={onChange} 
          />
        </div>
      </div>
    </>
  )
}

export default UserSearchInput;
