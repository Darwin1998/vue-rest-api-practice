<script setup>
    import useSkills from '../../composables/skills';
    import { onMounted } from 'vue';

    const { skills, getSkills } = useSkills();

    onMounted(() => {
        getSkills();
    });
</script>

<template>
    <div class="mt-14">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{name: 'create'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-800
            text-white rounded">New Skill</RouterLink>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Skill name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Slug
                        </th>
                      
                        <th scope="col" class="px-6 py-3">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="skill in skills" :key="skill.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    
                        <td class="px-6 py-4">
                            {{ skill.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ skill.slug }}
                        </td>

                        <td class="px-6 py-4 space-x-2">
                            <RouterLink :to="{name: 'edit', params:{id: skill.id}}" class="px-4 py-2 bg-green-500 hover:bg-indigo-700 text-white rounded"> Edit</RouterLink>
                            <button type="submit" class="px-4 py-2 bg-red-500 hover:bg-indigo-700 text-white rounded">
                                Delete
                            </button>
                        </td>
                       
                    </tr>
                  
                </tbody>
            </table>
        </div>

    </div>
</template>