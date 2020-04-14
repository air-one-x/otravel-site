import React from 'react';

const FormLoginModal = () => (
    <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"></button>
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">FILTRER LES LIEUX</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">

          <div className="filter__choices">
          <div className="filter__choices__category"> 
            <label className="category__choice switch test" htmlFor="category--shower"> 
             <div>Douches</div>
              <div className="custom-control custom-switch category--name">  
                <input type="checkbox" className="custom-control-input" id="category--shower" />
                <label className="custom-control-label" htmlFor="category--shower"></label>
              </div> 
            </label>
            <label htmlFor="category--toilet" className="category__choice switch test"> 
             <div>Toilettes</div>
              <div className="custom-control custom-switch category--name">  
                <input type="checkbox" className="custom-control-input" id="category--toilet" />
                <label className="custom-control-label" htmlFor="category--toilet"></label>
              </div> 
            </label>
          </div>
        </div>

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

export default FormLoginModal;