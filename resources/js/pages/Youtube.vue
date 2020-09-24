<template>
    <v-app>
        <div class="my-2">
            <Navbar></Navbar>
            <v-container class="grey lighten-5">
                <v-row>
                    <v-col cols="12" sm="9">
                        <v-text-field
                            label="Search"
                            single-line
                            solo
                            autofocus
                            v-model="term"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-btn @click="getApi" block large class="btn btn-primary">Search</v-btn>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row>
                    <v-col class="d-flex" cols="12" sm="4">
                        <v-btn
                            color="primary"
                            dark
                            @click.stop="dialog = true;"
                        >
                            Create Playlist
                        </v-btn>
                    </v-col>

                    <v-col class="d-flex" cols="12" sm="4">
                        <v-select
                            :items="allMoodList"
                            label="Go To Playlist"
                            solo
                            v-model="playlistPage"
                            @change="getCurrentPlaylist"
                        ></v-select>
                    </v-col>

                    <v-dialog
                        v-model="dialog"
                        max-width="290"
                    >
                        <v-form @submit.prevent="createPlaylist">
                            <v-card>
                                <v-card-title class="headline">Create Playlist</v-card-title>
                                <v-col cols="12">
                                    <v-text-field
                                        label="Add Mood For Playlist"
                                        type="text"
                                        v-model="mood"
                                    ></v-text-field>
                                </v-col>
                                <VueRecaptcha sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></VueRecaptcha>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="green darken-1"
                                        text
                                        @click="dialog = false"
                                        type="submit"
                                    >
                                        Create
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-form>
                    </v-dialog>
                </v-row>
            </v-container>
            <v-container class="grey lighten-5">
                <div>
                    <v-alert type="warning" v-if="!videos.length&&!playlistVideos">
                        There Are No Videos.
                    </v-alert>
                </div>

                <v-row>
                    <v-col v-if="playlistVideos"
                           v-for="video in playlistVideos"
                           :key="video.video_id"
                           cols="12"
                           sm="4"
                    >
                        <div class="card">
                            <iframe :src="`https://www.youtube.com/embed/${video.video_id}`" frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen class="m-1"></iframe>
                            <div class="card-body">
                                <h5 class="card-title"><a target="_blank"
                                                          :href="`https://www.youtube.com/watch?v=${video.video_id}`">{{
                                        video.video_title
                                    }}</a>
                                </h5>
                                <p class="card-text">{{ video.video_description }}</p>
                            </div>
                        </div>
                    </v-col>
                    <v-col v-if="!playlistVideos"
                           v-for="video in videos"
                           :key="video.id.videoId"
                           cols="12"
                           sm="4"
                    >
                        <div class="card">
                            <iframe :src="`https://www.youtube.com/embed/${video.id.videoId}`" frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen class="m-1"></iframe>
                            <div class="card-body">
                                <h5 class="card-title"><a target="_blank"
                                                          :href="`https://www.youtube.com/watch?v=${video.id.videoId}`">{{
                                        video.snippet.title
                                    }}</a>
                                </h5>
                                <p class="card-text">{{ video.snippet.description }}</p>

                                <button @click="getPlaylist" type="button" class="btn btn-sm d-block btn-success text-white" data-toggle="modal"
                                        :data-target="`#id${video.id.videoId}`">
                                    Add To Playlist
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" :id="`id${video.id.videoId}`" tabindex="-1" role="dialog"
                                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <form>
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal"
                                                            aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <label :for="`${video.id.videoId}`">Choose Mood</label>
                                                    <select :id="`${video.id.videoId}`" class="form-control"
                                                    v-model="chosenPlaylist">
                                                        <option v-for="item in moodList" :value="item">{{item}}</option>
                                                    </select>
                                                </div>
                                                <div class="modal-footer">
                                                    <button @click="addToPlaylist({
                                            video_id:video.id.videoId,
                                            video_title:video.snippet.title,
                                            video_description:video.snippet.description
                                            })" class="btn btn-primary text-white" data-dismiss="modal">Add</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-app>
</template>

<script>
import Navbar from "../components/Navbar";
import {mapGetters} from "vuex";
import VueRecaptcha from 'vue-recaptcha';

export default {
    name: "Football",
    components: {Navbar, VueRecaptcha},
    data() {
        return {
            videos: [],
            params: null,
            term: '',
            dialog: false,
            dialog1: false,
            mood: '',
            moodList: [],
            allMoodList: [],
            allMoods: null,
            startAllMoods: null,
            chosenPlaylist: '',
            playlistPage: '',
            playlistVideos: null
        }
    },

    mounted() {
        this.$store.dispatch('User/getUser');
        setTimeout(() => {
            this.getAllMoodList();
        }, 1000)
    },

    computed: {
        ...mapGetters({
            'getUser': 'User/getUser',
        })
    },
    methods: {
        onSubmit(token) {
            document.getElementById("demo-form").submit();
        },

        getAllMoodList(){
            axios.post('api/youtube/show', {user_id: this.getUser.id}).then(response => {
                this.startAllMoods = response.data;
                this.allMoodList = [];
                for (let mood of response.data) {
                    this.allMoodList.push(mood.mood);
                }
            })
        },
        getApi() {
            this.params = {
                part: 'snippet',
                key: 'AIzaSyCUK_HCef6uv8FqLhgsm2Ik3fVOUMS-F6M',
                type: 'video',
                maxResults: 20,
                term: this.term,
                q: this.term
            };
            this.playlistVideos = null;

            axios.post('api/youtube', {params: this.params}).then(response => {
                this.videos = response.data.items;
            })
        },

        getCurrentPlaylist() {
            let mood = this.startAllMoods.filter(item => item.mood === this.playlistPage);

            axios.post('api/youtube/playlist', {playlist_id: mood[0].id}).then(response => {
                this.playlistVideos = response.data;
            })
        },

        createPlaylist() {
            axios.post('api/youtube/create', {user_id: this.getUser.id, mood: this.mood,});
            this.getAllMoodList();
        },

        getPlaylist() {
            this.dialog1 = true;
            axios.post('api/youtube/show', {user_id: this.getUser.id}).then(response => {
                this.allMoods = response.data;
                for (let mood of response.data) {
                    this.moodList.push(mood.mood);
                }
            })
        },

        addToPlaylist(videoData) {
            let mood = this.startAllMoods.filter(item => item.mood === this.chosenPlaylist);
            let data = {
                video_id: videoData.video_id,
                video_title: videoData.video_title,
                video_description: videoData.video_description,
                playlist_id: mood[0].id
            };
            axios.post('api/youtube/store', data)
        }
    }
}
</script>

<style scoped>

</style>
