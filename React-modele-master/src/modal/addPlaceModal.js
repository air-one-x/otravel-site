import React from 'react';

const AddPlaceModal = () => (
    <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">+</button>
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Ajouter un lieu</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">

          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Adresse</label>
              <input disabled type="email" className="form-control" id="exampleFormControlInput1" placeholder="1 rues des turcs" />
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Catégories</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Douches</option>
                <option>Toilettes</option>
              </select>
            </div>
            <div className="form-group">
              
            <div className="form-group">
              <label for="exampleFormControlFile1">Example file input</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1" />
            </div>

            <div className="form-group">
              <label for="exampleFormControlFile1">Example file input</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1" />
            </div>

            <div className="form-group">
              <label for="exampleFormControlFile1">Example file input</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1" />
            </div>

            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </form>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
   </div>
);

export default AddPlaceModal;