require "rails_helper"

RSpec.describe "Api::V1::Posts::Registered", type: :request do
  describe "GET api/v1/posts/resistered" do
    subject { get(api_v1_posts_registered_index_path, headers: headers) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }

    context "registered posts が存在する場合" do
      before do
        create_list(:post, 1, user: current_user, status: "reading")
        create_list(:post, 2, user: current_user, status: "registered")
        create_list(:post, 3, user: current_user, status: "completed")
      end

      it "自身が作成した registered posts を取得できる" do
        subject
        res = JSON.parse(response.body)
        expect(res.length).to eq 2
        expect(res[0].keys).to eq ["id", "title", "url", "author", "image", "status", "created_at", "updated_at", "user", "post_items"]
        expect(res[0]["status"]).to eq "registered"
        expect(res[1]["status"]).to eq "registered"
        expect(response).to have_http_status(:ok)
      end
    end

    context "reading post が存在しない場合" do
      before do
        create_list(:post, 1, user: current_user, status: "reading")
        create_list(:post, 3, user: current_user, status: "completed")
      end

      it "空のオブジェクトが返される" do
        subject
        res = JSON.parse(response.body)
        expect(res).to be_empty
        expect(response).to have_http_status(:ok)
      end
    end
  end
end
