import React from 'react';

const FilterPlaceModal = () => (
    <div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
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
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
   </div>
);

export default FilterPlaceModal;