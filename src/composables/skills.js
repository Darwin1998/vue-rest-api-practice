import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://task-manager.test/api/v1";

export default function useSkills() {
  const skills = ref([]);
  const skill = ref({});
  const errors = ref({});
  const router = useRouter();

  const getSkills = async () => {
    const response = await axios.get("skills");
    skills.value = response.data.data;
  };

  const getSkill = async (id) => {
    const response = await axios.get("skills/" + id);
    skill.value = response.data.data;
  };

  const storeSkill = async (data) => {
    errors.value = {}; // Reset errors object

    try {
      await axios.post("skills", data);
      await router.push({ name: "index" });
    } catch (error) {
        
        if (error.response.status === 422) {
            errors.value = error.response.data.message;
        }
    }
  };

  const updateSkill = async (id) => {
    try {
      await axios.put("skills/" + id, skill.value);
      await router.push({ name: "index" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.message;
      }
    }
  };

  const destroySkill = async (id) => {
    if (!window.confirm("Are you sure you want to destroy?")) {
      return;
    }

    await axios.delete(`skills/${id}`);
    await getSkills();
  };

  // Return the skills, skill, and errors objects along with the functions
  return {
    skills,
    skill,
    errors, // Include the errors object in the return value
    getSkills,
    getSkill,
    storeSkill,
    updateSkill,
    destroySkill,
  };
}
