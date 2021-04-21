{/* Button for Year */}
<DropdownButton
as={ButtonGroup}
key={'year'}
id={`dropdown-variants-year`}
// variant={variant.toLowerCase()}
title={searchInput.year} //change button displayed make when state is changed.
>
<Dropdown.Menu>
  {['1999','2000','2001','2002'].map(variant => (<Dropdown.Item onClick={ ()=> (setSearchInput({make:`${searchInput.make}`,model: `${searchInput.model}`, year: `${variant}`, Max Price: `${variant}`}))}>{variant}</Dropdown.Item>),)}
</Dropdown.Menu>
</DropdownButton>


{/* Button for Max Price */}
<DropdownButton
as={ButtonGroup}
key={'Max Price'}
id={`dropdown-variants-maxPrice`}
// variant={variant.toLowerCase()}
title={searchInput.maxPrice} //change button displayed make when state is changed.
>
<Dropdown.Menu>
  {['199900','200000','200001','200002'].map(variant => (<Dropdown.Item onClick={ ()=> (setSearchInput({make:`${searchInput.make}`,model: `${searchInput.model}`, year: `${searchInput.year}`, Max Price: `${variant}`}))}>{variant}</Dropdown.Item>),)}
</Dropdown.Menu>
</DropdownButton>
