const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (event) => {
  const suffix = event.target.dataset.sizing || '';
  document.documentElement.style
  .setProperty(`--${event.target.name}`,event.target.value+suffix)
}

inputs.forEach(input => input.addEventListener('input',handleUpdate));
