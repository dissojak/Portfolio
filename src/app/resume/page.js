function Resume() {
  return (
    <>
      <br />
      <br />
      <div class="bg-white rounded-md shadow-md p-8">
        <br />
        <br />
        <div>
          <h1 class="text-2xl mb-2">Your Name</h1>
          <h2 class="text-xl mb-4">Software Developer</h2>
          <p class="mb-4">Your professional summary goes here.</p>
          <section class="mb-4">
            <h3 class="text-lg mb-2">Skills</h3>
            <ul class="list-disc ml-6 mb-4">
              <li class="mb-1">Skill 1</li>
              <li class="mb-1">Skill 2</li>
              <li class="mb-1">Skill 3</li>
            </ul>
          </section>
          <section class="mb-4">
            <h3 class="text-lg mb-2">Work Experience</h3>
            <ul class="list-disc ml-6 mb-4">
              <li class="mb-1">Company 1 - Position, Duration</li>
              <li class="mb-1">Company 2 - Position, Duration</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Resume;
